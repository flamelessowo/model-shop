from django.urls import path
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)
from .views import UserView, detail_user_view, create_user_view

urlpatterns = [
    path('users/', UserView.as_view()),
    path('user/<str:username>', detail_user_view),
    path('user/create/', create_user_view),
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]
