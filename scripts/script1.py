import xlrd
import xlwt
from xlwt import Workbook

json="["
local=[]
loc=("/Users/hogar/Downloads/inventario_comercios/comercios1.xlsx")
book = xlrd.open_workbook(loc)
sheetindex= book.sheet_by_index(0)

def find_cell(sheet, val):
    for rowidx in range(sheet.nrows):
        row = sheet.row(rowidx)
        for colidx, cell in enumerate(row):
            if cell.value == val :
                return colidx, rowidx
                

for i in range(1,24):
    sheet = book.sheet_by_index(i)
    category=sheetindex.cell_value(i-1,1)
    linea="{ \"id\": \""+sheet.name+"\","+"\"nombre\": \""+sheet.name+"\","+"\"categoria\": \""+str(category)+"\","
    listaproductos=[]
    col, row=find_cell(sheet, "productos especificos")
    print (col,row)
    row=row+1
    while(row<sheet.nrows):
        listaproductos.append("\""+str(sheet.cell_value(row,col))+"\"")
        row=row+1
    productos="\"productos\": ["+", ".join(listaproductos) + "]},"
    linea=linea+productos
    separator=" "
    separator.join(local)
    json=json+linea

json=json+"]"
print(json)



