import xlrd
import xlwt
from xlwt import Workbook

json="["
local=[]
loc=("/Users/hogar/Downloads/inventario_comercios/comercios16.xlsx")
book = xlrd.open_workbook(loc)
sheetindex= book.sheet_by_index(0)

def find_cell(sheet, val):
    for rowidx in range(sheet.nrows):
        row = sheet.row(rowidx)
        for colidx, cell in enumerate(row):
            if cell.value == val :
                return colidx, rowidx
                

for sheet in book.sheets():
    print(sheet.name)
    col,row=find_cell(sheet,"categoria *si son separados por categoria")
    listacategorias=[]
    row=row+1
    while(row<sheet.nrows):
        if(sheet.cell_value(row,col)!=""):
            listacategorias.append("\""+str(sheet.cell_value(row,col))+"\"")
        row=row+1
    linea="{ \"id\": \""+sheet.name+"\","+"\"nombre\": \""+sheet.name+"\","+"\"categoria\": " +"["+", ".join(listacategorias) + "],"
    listaproductos=[]
    col, row=find_cell(sheet, "productos especificos *necesario")
    row=row+1
    while(row<sheet.nrows):
        if(sheet.cell_value(row,col)!=""):
            listaproductos.append("\""+str(sheet.cell_value(row,col))+"\"")
        row=row+1
    productos="\"productos\": ["+", ".join(listaproductos) + "]},"
    linea=linea+productos
    separator=" "
    separator.join(local)
    json=json+linea

json=json+"]"
print(json)