#include <stdio.h>
#include "Productos.h"
#include <string.h>

int buscarLibre(int id[], int tam)
{
    int index = -1;
    int i;
    for(i=0; i<tam; i++)
    {
        if(id[i]==0)
        {
            index = i;
            break;
        }
    }

    return index;
}
void mostrarProductos(int idProducto[], char descripcion[][50], int stock[], float precioUnitario[], int cant)
{
    int i;
    printf("%5s %20s %5s %s\n","id","descripcion","stock","precio");
    for(i=0; i<cant; i++)
    {
        if(idProducto[i]!=0)
        {
            printf("%5d %20s %5d %.2f\n", idProducto[i], descripcion[i], stock[i], precioUnitario[i]);
        }
    }
}

void ordenarProductos(int idProducto[], char descripcion[][50], int stock[], float precioUnitario[], int cant)
{
    int auxInt;
    float auxFloat;
    char auxString[50];
    int i;
    int j;
    for(i=0; i<cant-1; i++)
    {
        for(j=i+1; j<cant; j++)
        {
            if(stricmp(descripcion[i],descripcion[j])>0)
            {
                strcpy(auxString,descripcion[i]);
                strcpy(descripcion[i],descripcion[j]);
                strcpy(descripcion[j], auxString);


                auxInt = idProducto[i];
                idProducto[i]= idProducto[j];
                idProducto[j]=auxInt;


                auxInt = stock[i];
                stock[i]= stock[j];
                stock[j]=auxInt;


                auxFloat = precioUnitario[i];
                precioUnitario[i]= precioUnitario[j];
                precioUnitario[j]=auxFloat;


            }
        }
    }




}

