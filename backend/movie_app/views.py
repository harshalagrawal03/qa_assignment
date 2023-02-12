from django.shortcuts import render
from django.core import serializers
from movie_app.models import Movie
from django.http import HttpResponse
from django.views import View
import json
from django.contrib.auth.models import User

# Create your views here.

def get_movie_list(request, username):

    return HttpResponse(serializers.serialize('json',Movie.objects.filter(parentUser__username=username)))


def add_movie(request, username):

    data = json.loads(request.body.decode('utf-8'))

    user=None
    if User.objects.filter(username=username).count() > 0:
        user = User.objects.get(username=username)
    else:
        user = User.objects.create(username=username,email=username,password=username)  

    movie = Movie.objects.create(parentUser=user, name=data['name'], description=data['description'], release_date=data['release_date'])
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

