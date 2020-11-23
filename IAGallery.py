from flask import Flask, request, render_template

app = Flask(__name__)

# Dictionary of images and their names
# Can be expanded or converted to dynamically generate from a given folder
GalleryImgs={
    '1':"Hall's Gap One",
    '2':"Hall's Gap Two",
    '3':"Hooker Track",
    '4':"Otway Oasis"
}

@app.route("/", methods=["GET"])
def index():
    # Force the page to load the first image by default
    IMG ='1'
    # Pass the KV pair from the dicttionary to allow dynamic title load
    return render_template("index_SPA.html", IMG=IMG, IMGTITLES=[GalleryImgs], IMGTITLE=GalleryImgs)
    