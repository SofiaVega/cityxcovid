import xlrd
import xlwt
from xlwt import Workbook

dirname="/Users/hogar/cityxcovid/prueba/orden/"
def find_cell_in(sheet, val, alt):
    for rowidx in range(sheet.nrows):
        row = sheet.row(rowidx)
        for colidx, cell in enumerate(row):
            if val in str(cell.value).lower().split() or alt in str(cell.value).lower().split():
                return colidx, rowidx
    return 0,0
def find_cell(sheet, val):
    for rowidx in range(sheet.nrows):
        row = sheet.row(rowidx)
        for colidx, cell in enumerate(row):
            if val == str(cell.value):
                return colidx, rowidx
    return 0,0

#filenames=["comercios_JoseManuel.xlsx", "comercios_Andres1.xlsx","comercios_Liz2.xlsx","comercios_Gabriel.xlsx", "comercios_MariaFernanda.xlsx","comercios_Sofia2.xlsx","comercios_Santiago.xlsx"]
filenames=["comercios_Santiago.xlsx"]
inventarios=[]
for filename in filenames:
    book = xlrd.open_workbook(dirname+filename)
    print(filename)
    for i in range(0, book.nsheets):
        sheet=book.sheet_by_index(i)
        listaproductos=[]
        listacategorias=[]
        telefono="na"
        findstr="productos especificos *necesario"
        if filename == "comercios_AnaKaren177-211.xlsx":
            findstr="productos especificos"
            telefono=str(sheet.cell_value(0,2))
        if filename == "comercios_Liz2.xlsx":
            findstr="Producto Especifico"
            telefono=str(sheet.cell_value(0,2))
        if filename == "comercios_Santiago.xlsx":
            telefono=str(sheet.cell_value(0,0))
        col, row=find_cell(sheet, findstr)
        row=row+1
        while(row<sheet.nrows):
            if(sheet.cell_value(row,col)!=""):
                category = str(sheet.cell_value(row,col-1)).lower()
                producto = str(sheet.cell_value(row,col))
                print(sheet.ncols)
                if col+1 < sheet.ncols:
                    cantidad = str(sheet.cell_value(row,col+1))
                else:
                    cantidad = ""
                if col+2 < sheet.ncols:
                    precio = str(sheet.cell_value(row,col+2))
                else:
                    precio = ""
                if filename == "comercios_Gabriel.xlsx" or filename == "comercios_Santiago.xlsx":
                    if col+1 < sheet.ncols:
                        precio = str(sheet.cell_value(row,col+1))
                    else:
                        precio = ""
                    cantidad = ""
                if "\""+category+"\"" not in listacategorias:
                    listacategorias.append("\""+category+"\"")
                listaproductos.append("{ \"producto\": \""+producto+"\", \"precio\": \""+precio+"\", \"categoria\": \""+category+"\", \"cantidad\": \""+cantidad+"\" }")
            row=row+1
        productos="\"productos\": ["+", ".join(listaproductos) + "]}"
        json="{ \"id\": \""+sheet.name+"\","+"\"nombre\": \""+sheet.name+"\", \"telefono\": \""+str(telefono).lower()+"\", "+"\"categoria\": " +"["+", ".join(listacategorias) + "],"+ productos
        inventarios.append(json)
newjson="["+", ".join(inventarios)+"]"
f = open("auxjsonSantiago.json", "w")
f.write(newjson)
f.close()
