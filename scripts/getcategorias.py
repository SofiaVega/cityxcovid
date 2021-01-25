import xlrd
import xlwt
from xlwt import Workbook

#revisar que hace el break
mapa={}
loc=("/Users/hogar/Downloads/inventario_comercios/comercios1.xlsx")
book = xlrd.open_workbook(loc)
sheet = book.sheet_by_index(1)

flag=False
general=False
for i in range(1,21):
    loc=("/Users/hogar/Downloads/inventario_comercios/comercios"+str(i)+".xlsx")
    book = xlrd.open_workbook(loc)
    for sheet in book.sheets():
        flag=False
        general=False
        if(i==3):
            flag=True
        if(i==1 and sheet.name=="Lista"):
            flag=True
            general=True
        for r in range(sheet.nrows):
            if(flag):
                val=str(sheet.cell_value(r,1))
                val=val.lower()
                valset=sheet.name
                if general:
                    valset=str(sheet.cell_value(r,0))
                if val in mapa:
                    mapa[val].add(valset)
                else:
                    mapa[val]=set([valset])
            elif("categoria" in str(sheet.cell_value(r,1)).split() or "categoria:" in str(sheet.cell_value(r,1)).split() or "Categoria" in str(sheet.cell_value(r,1)).split()):
                flag=True
            if i==5 or i==6 or i==10:
                flag=True
                general=True
        if(not flag):
            print(loc)

wb=Workbook()
sheet1 = wb.add_sheet('Sheet 1') 
  
i=0
j=0
for key in mapa:
    sheet1.write(i,0, key)
    j=1
    for val in mapa[key]:
        sheet1.write(i,j, val)
        j+=1
    i+=1
print(mapa)
wb.save('categorias1.xls')
