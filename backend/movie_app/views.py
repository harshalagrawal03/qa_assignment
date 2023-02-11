from django.shortcuts import render
from django.core import serializers
from movie_app.models import Movie
from django.http import HttpResponse
import json

# Create your views here.

def get_movie_list(request):

    return HttpResponse(serializers.serialize('json',Movie.objects.all()))


def add_movie(request):

    data = json.loads(request.body.decode('utf-8'))
    movie = Movie.objects.create(name=data['name'], description=data['description'], release_date=data['release_date'])
    movie.save()
    return HttpResponse(serializers.serialize('json',Movie.objects.all()))

