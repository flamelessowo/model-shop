from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.request import Request
from rest_framework import generics, decorators, status
from django.core.exceptions import ObjectDoesNotExist

from .models import Model
from .serializers import ModelSerializer

class ModelView(generics.ListAPIView):
    queryset = Model.objects.all()
    serializer_class = ModelSerializer

@decorators.api_view(['GET'])
def detail_model_view(request: Request, slug: str):
    if request.method == 'GET':
        try:
            model = Model.objects.get(slug=slug)
            serialized_model = ModelSerializer(model)
            return Response(serialized_model.data, status=status.HTTP_200_OK)
        except ObjectDoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
    return Response(status.HTTP_400_BAD_REQUEST)
