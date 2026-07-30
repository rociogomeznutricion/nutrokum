import datetime
import os

def ejecutar_tarea_diaria():
    # Obtener la fecha y hora actual
    ahora = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    nombre_archivo = "registro_ejecuciones.txt"
    
    # Crear un mensaje para el registro
    mensaje = f"Automatización ejecutada con éxito el: {ahora} UTC\n"
    
    # Imprimir en consola (para que se vea en los logs de GitHub Actions)
    print(mensaje)
    
    # Escribir (o añadir) el mensaje en un archivo de texto
    # Usamos 'a' (append) para añadir líneas sin borrar lo anterior
    with open(nombre_archivo, "a", encoding="utf-8") as archivo:
        archivo.write(mensaje)
        
    print(f"Se ha actualizado el archivo '{nombre_archivo}'.")

if __name__ == "__main__":
    ejecutar_tarea_diaria()
