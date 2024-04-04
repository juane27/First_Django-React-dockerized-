from django.shortcuts import render

from django.http import JsonResponse


def char_count(request):
    text = request.GET.get("text", "")
    print(len(text))
    return JsonResponse({"count": len(text)})