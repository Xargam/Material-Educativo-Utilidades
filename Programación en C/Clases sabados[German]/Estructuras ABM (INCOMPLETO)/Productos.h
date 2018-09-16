
typedef struct
{

}eProducto;


int buscarLibre(eProducto[], int);

eProducto pedirProducto();

int ingresarProductoEnLista(eProducto[], int);

int modificarProducto(eProducto[], int, int);

int borrarProducto(eProducto[], int, int);

void mostrarListaDeProductos(eProducto[], int);

void mostrarUnProducto(eProducto);

void ordenarProductos(eProducto[], int);
