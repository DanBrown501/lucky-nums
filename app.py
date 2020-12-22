from flask import Flask, render_template, request, jsonify
from validation import build_error
from flask_cors import CORS, cross_origin
import requests
app = Flask(__name__)
CORS(app)

colors = ['red', 'green', 'orange', 'blue']


@app.route("/")
def homepage():
    """Show homepage."""

    return render_template("index.html")


@app.route('/api/get-lucky-num', methods=['POST'])
def get_lucky_num():
    """Get Lucky number"""

    name = request.json["name"]
    email = request.json["email"]
    year = request.json["year"]
    color = request.json["color"]

    errors = build_error(name, email, year, color)

    # Return errors
    if errors:
        error_res = {}
        error_res['errors'] = errors
        return (jsonify(error_res), 201)

    # Return Lucky Number Info
    res = requests.get("http://numbersapi.com/random?min=1&max=100&json")
    num_data = res.json()
    res = requests.get(f"http://numbersapi.com/{year}/year?json")
    year_data = res.json()

    my_json_res = {
        "num": {
            "fact": num_data["text"],
            "num": num_data["number"]
        },
        "year": {
            "fact": year_data["text"],
            "year": year_data["number"]
        }
    }
    return (jsonify(my_json_res), 201)