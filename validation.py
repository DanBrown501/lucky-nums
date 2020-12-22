validColors = ['red', 'green', 'orange', 'blue']


def build_error(name, email, year, color):
    """If an input has an error, start building the JSON error output"""
    color = color.lower()
    errors = {}
    if not name:
        errors['name'] = [
            "The name field is required."
        ]
    if not email:
        errors['email'] = [
            "The email field is required."
        ]
    if not year.isnumeric():
        errors['year'] = [
            "The year must be an integer."
        ]
    elif int(year) < 1900 or int(year) > 2000:
        errors['year'] = [
            "The year must be between 1900 and 2000."
        ]
    if color not in validColors:
        errors['color'] = [
            "The color must be red, green, orange, or blue"
        ]
    return errors