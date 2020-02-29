from django.contrib.auth.models import User, Group
from rest_framework import serializers 
from laureats.models import *

class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['url', 'username', 'email', 'groups']


class GroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Group
        fields = ['url', 'name']

class LaureatSerializer(serializers.ModelSerializer):
    class Meta:
        model = Laureat
        fields = "__all__"
    def to_representation(self, instance):
        data = super().to_representation(instance)
        data['promotion'] = PromotionSerializer(
            Promotion.objects.get(pk=data['promotion'])).data
        data['filiere'] = FiliereSerializer(
            Filiere.objects.get(pk=data['filiere'])).data
        data['adresse'] = AdresseSerializer(
            Adresse.objects.get(pk=data['adresse'])).data
        return data

class PromotionSerializer(serializers.ModelSerializer):
    laureats = serializers.PrimaryKeyRelatedField(many=True,read_only=True)     
    class Meta:
        model = Promotion
        fields = ['laureats','annee_scolaire']

class AdresseSerializer(serializers.ModelSerializer):
    laureats = serializers.PrimaryKeyRelatedField(many=True,read_only=True)     
    class Meta:
        model = Adresse
        fields = ['laureats','id','pays','ville','adresse','zip_code']

class FiliereSerializer(serializers.ModelSerializer):
    laureats = serializers.PrimaryKeyRelatedField(many=True,read_only=True)     
    class Meta:
        model = Filiere
        fields = ['laureats','libelle']

class EtudiantSerializer(serializers.ModelSerializer):
    #laureat = LaureatSerializer(read_only=True)      
    class Meta(LaureatSerializer.Meta):
        model = Etudiant

class EmployeSerializer(serializers.ModelSerializer):
    laureats = LaureatSerializer(many=True, read_only=True)      
    class Meta(LaureatSerializer.Meta):
        model = Employe


class ProfessionSerializer(serializers.ModelSerializer):
    employes =  serializers.PrimaryKeyRelatedField(many=True,read_only=True)           
    class Meta:
        model = Profession
        fields = ['employes','libelle']

class ContactSerializer(serializers.Serializer):
    subject = serializers.CharField()
    message = serializers.CharField()
    emails_list = serializers.ListField()

