import os
import time
from flask import Flask, jsonify, send_from_directory, request
from flask_sqlalchemy import SQLAlchemy
from models import User, Product, Purchase, db

app = Flask(__name__, static_folder='../client/build')
app.config['SQLALCHEMY_DATABASE_URI'] = os.environ['DATABASE_URL']
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db.init_app(app)
with app.app_context():
    db.create_all()

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve(path):
    if path != "" and os.path.exists(app.static_folder + '/' + path):
        return send_from_directory(app.static_folder, path)
    else:
        return send_from_directory(app.static_folder, 'index.html')

@app.route('/users', methods=['GET'])
def get_users():
    users = User.query.all()
    result = []
    for user in users:
        user_data = {}
        user_data['id'] = user.id
        user_data['name'] = user.name
        user_data['email'] = user.email
        result.append(user_data)
    return jsonify(result)

@app.route('/products', methods=['GET'])
def get_products():
    products = Product.query.all()
    result = []
    for product in products:
        product_data = {}
        product_data['id'] = product.id
        product_data['name'] = product.name
        product_data['description'] = product.description
        product_data['price'] = str(product.price)
        result.append(product_data)
    return jsonify(result)

# @app.route('/purchases', methods=['GET'])
# def get_purchases():
#     purchases = Purchase.query.all()
#     result = []
#     for purchase in purchases:
#         purchase_data = {}
#         purchase_data['id'] = purchase.id
#         purchase_data['user_id'] = purchase.user_id
#         purchase_data['product_id'] = purchase.product_id
#         result.append(purchase_data)
#     return jsonify(result)

@app.route('/purchases/<int:user_id>', methods=['GET'])
def get_purchases(user_id):
    purchases = Purchase.query.filter_by(user_id=user_id).all()
    result = []
    for purchase in purchases:
        purchase_data = {}
        purchase_data['id'] = purchase.id
        purchase_data['user_id'] = purchase.user_id
        purchase_data['product_id'] = purchase.product_id
        result.append(purchase_data)
    return jsonify(result)

@app.route('/purchases', methods=['POST'])
def make_purchases():
    user_id = request.json['user_id']
    product_id = request.json['product_id']
    purchase = Purchase(user_id=user_id, product_id=product_id)
    db.session.add(purchase)
    db.session.commit()
    return jsonify({'message': 'Purchase created successfully'})