from django.shortcuts import render

from django.http import HttpResponse, JsonResponse

def test(request):
	datos = {'name':"Moises"}
	return JsonResponse(datos)
	
