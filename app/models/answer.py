from .db import db, environment, SCHEMA, add_prefix_for_prod
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
import datetime


class Answer(db.Model):
    __tablename__ = 'answers'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    body = db.Column(db.String(1000), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    question_id = db.Column(db.Integer, db.ForeignKey(
        'questions.id'), nullable=False)
    created_at = db.Column(
        db.Date, default=datetime.datetime.now, nullable=False)
    updated_at = db.Column(
        db.Date, default=datetime.datetime.now, nullable=False)
    answer_user = db.relationship('User', back_populates='user_answer')
    answer_question = db.relationship(
        'Question', back_populates='question_answer')
