import time
from flask import Flask

app = Flask(__name__)

@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"

@app.route('/time')
def get_current_time():
    return {'time': time.time()}