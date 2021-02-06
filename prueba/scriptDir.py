import xlrd
import xlwt
from xlwt import Workbook
import os

dirname="/Users/hogar/cityxcovid/prueba/orden/"
def find_cell(sheet, val, alt):
    for rowidx in range(sheet.nrows):
        row = sheet.row(rowidx)
        for colidx, cell in enumerate(row):
            if val in str(cell.value).lower().split() or alt in str(cell.value).lower().split():
                return colidx, rowidx
    return 0,0

filenames=["comercios_AnaKaren177-211.xlsx", "comercios_JoseManuel.xlsx", "comercios_Andres1.xlsx","comercios_Liz2.xlsx","comercios_Gabriel.xlsx", "comercios_MariaFernanda.xlsx","comercios_Sofia2.xlsx"]
inventarios=[]
for filename in filenames:
    book = xlrd.open_workbook(dirname+filename)
    print(filename)
    for i in range(0, book.nsheets):
        sheet=book.sheet_by_index(i)
        listaproductos=[]
        listacategorias=[]
        col, row=find_cell(sheet, "productos", "producto")
        print("hello")
        row=row+1
        while(row<sheet.nrows):
            if(sheet.cell_value(row,col)!=""):
                category = str(sheet.cell_value(row,col-1)).lower()
                cantidad = str(sheet.cell_value(row,col+1))
                producto = str(sheet.cell_value(row,col))
                precio = str(sheet.cell_value(row,col+2))
                if "\""+category+"\"" not in listacategorias:
                    listacategorias.append("\""+category+"\"")
                listaproductos.append("{ \"producto\": \""+producto+"\", \"precio\": \""+precio+"\", \"categoria\": \""+category+"\", \"cantidad\": \""+cantidad+"\" }")
            row=row+1
        productos="\"productos\": ["+", ".join(listaproductos) + "]}"
        telefono="na"
        json="{ \"id\": \""+sheet.name+"\","+"\"nombre\": \""+sheet.name+"\", \"telefono\": \""+str(telefono).lower()+"\", "+"\"categoria\": " +"["+", ".join(listacategorias) + "],"+ productos
        inventarios.append(json)
newjson="["+", ".join(inventarios)+"]"
f = open("auxjson2.json", "w")
f.write(newjson)
f.close()

    
    
