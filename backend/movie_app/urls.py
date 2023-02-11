
from django.urls import path

urlpatterns = []

from movie_app.views import get_movie_list, add_movie

urlpatterns += [
    path('get-movie-list', get_movie_list),
    path('add-movie', add_movie),
]

