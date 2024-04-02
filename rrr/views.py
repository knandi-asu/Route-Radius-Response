from django.views.decorators.csrf import csrf_exempt
from django.http import HttpResponse, JsonResponse


# Create your views here.
@csrf_exempt
def Directions(request):
    return JsonResponse({'message': 'Hello, World!'})
