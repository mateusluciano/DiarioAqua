from flask import Flask, render_template, jsonify
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.sql import func
import time
import os

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///visitors.db'
db = SQLAlchemy(app)

class Visitor(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    timestamp = db.Column(db.DateTime(timezone=True), default=func.now())

    def __repr__(self):
        return f'<Visitor {self.id}>'

db.create_all()

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/add_visitor')
def add_visitor():
    visitor = Visitor()
    db.session.add(visitor)
    db.session.commit()
    return jsonify({"message": "Visitante adicionado com sucesso!"})

@app.route('/visitor_count')
def visitor_count():
    count = Visitor.query.count()
    return jsonify({"count": count})

if __name__ == '__main__':
    app.run(debug=True)

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=int(os.environ.get('PORT', 5000)))