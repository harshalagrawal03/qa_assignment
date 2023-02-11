from django.shortcuts import render
from django.core import serializers
from movie_app.models import Movie
from django.http import HttpResponse
from django.views import View
import json

# Create your views here.

def get_movie_list(request):

    return HttpResponse(serializers.serialize('json',Movie.objects.all()))


def add_movie(request):

    data = json.loads(request.body.decode('utf-8'))
    movie = Movie.objects.create(name=data['name'], description=data['description'], release_date=data['release_date'])
    movie.save()
    return HttpResponse(serializers.serialize('json',Movie.objects.all()))


class MovieView(View):

    def get(self, request, id):
        return HttpResponse(serializers.serialize('json',[Movie.objects.get(id=id)]))

    def put(self, request, id):
        data = json.loads(request.body.decode('utf-8'))
        movie = Movie.objects.get(id=id)
        movie.name = data['name']
        movie.description = data['description']
        movie.release_date = data['release_date']
        movie.save()
        return HttpResponse(serializers.serialize('json',[Movie.objects.get(id=id)]))

    def delete(self, request, id):
        print(id)
        Movie.objects.get(id=id).delete()
        return HttpResponse(serializers.serialize('json',[]))

