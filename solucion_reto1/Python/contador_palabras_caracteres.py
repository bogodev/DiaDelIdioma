###CONTADOR DE PALABRAS Y CARACTERES EN PYTHON 3.6
#Autor: Alfonso Neil Jiménez Casallas
###Archivos de prueba: romeo.txt, words.txt
import string
print ('***FELIZ DÍA DEL IDIOMA 2019***')
#toma los signos de puntuación como caracteres ASCII
print(string.punctuation)
translator = str.maketrans('', '', string.punctuation)
#s = 'string with "punctuation" inside of it! Does this work? I hope so.'
#print(s.translate(translator))
archivo = input("Ingrese el nombre del documento con la extensión .txt: ")
try:
	fh = open(archivo)
except:
	print ('El archivo no pudo ser abierto:', archivo)
	exit()
palabras = 0
caracteres = 0
for linea in fh:
	#remueve los especios en blanco a la derecha de la línea en el texto
	l = linea.rstrip()
	#remueve los signos de puntuación, caracteres especiales y convierte la línea de texto en una lista de palabras
	l2 = l.translate(translator).split()
	palabras += len(l2)
	caracteres += len(l)
print('El número total de palabras es:',palabras, ' y el número total de caracteres es:',caracteres)