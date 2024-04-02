
from django.urls import path

from rrr.views import Directions

urlpatterns = [

    path("direction",Directions),
]