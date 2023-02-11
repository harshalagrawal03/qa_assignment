
from django.urls import path

from movie_app.views import get_movie_list, add_movie, MovieView

urlpatterns = []

urlpatterns += [
    path('get-movie-list', get_movie_list),
    path('add-movie', add_movie),
    path('movie/<int:id>', MovieView.as_view())
]

