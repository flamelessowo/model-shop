from django.urls import path
from .views import ModelView, detail_model_view

urlpatterns = [
    path('models/', ModelView.as_view()),
    path('model/<slug>', detail_model_view)
]
