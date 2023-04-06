from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.request import Request
from rest_framework import generics, decorators, status
from django.core.exceptions import ObjectDoesNotExist

from django.contrib.auth.models import User
from .serializers import UserSerializer

class UserView(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

@decorators.api_view(['GET'])
def detail_user_view(request: Request, username: str):
    try:
        user = User.objects.get(username=username)
        serialized_user = UserSerializer(user)
        return Response(serialized_user.data, status=status.HTTP_200_OK)
    except ObjectDoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

@decorators.api_view(['POST'])
def create_user_view(request):
    try:
        serializer = UserSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        return Response(status=status.HTTP_201_CREATED)

    except ObjectDoesNotExist:
        pass
    
