from rest_framework import serializers
from django.contrib.auth.models import User
from django.contrib.auth import authenticate

#User Serializer
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'email', 'first_name', 'last_name')

#Register Serializer 
class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields=('id', 'email', 'first_name', 'last_name', 'password')
        extra_kwargs = {'password': {'write_only':True}}

    def create(self, validated_data):
        user = User.objects.create_user(
            username=validated_data['email'],
            email=validated_data['email'],
            password=validated_data['password'], 
            first_name = validated_data['first_name'], 
            last_name=validated_data['last_name']
        )
        return user

# Login Serializer

class LoginSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField()
    def validate(self, data):
        user = authenticate(username=data['email'], password=data['password'])
        print(user)
        if user:
            return user
        raise serializers.ValidationError("Incorrect Credentials")
        