from django.urls import path
from .views import generate_content

urlpatterns = [
    path('generate/', generate_content),
]