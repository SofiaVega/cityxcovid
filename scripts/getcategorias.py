import xlrd
import unicodedata

#revisar que hace el break
mapa={}
loc=("/Users/hogar/Downloads/inventario_comercios/comercios1.xlsx")
book = xlrd.open_workbook(loc)
sheet = book.sheet_by_index(1)
#for r in range(sheet.nrows):
 #   for c in range(sheet.ncols):
  #      if(sheet.cell_value(r,c)=="categoria"):
   #         for val in sheet.col_values(c):
    #            mapa[val]=sheet.name
     #       break
flag=False
for i in range(1,21):
    loc=("/Users/hogar/Downloads/inventario_comercios/comercios"+str(i)+".xlsx")
    book = xlrd.open_workbook(loc)
    for sheet in book.sheets():
        flag=False
        if(i==3):
            flag=True
        for r in range(sheet.nrows):
            if(flag):
                val=str(sheet.cell_value(r,1))
                if val in mapa:
                    mapa[val].add(sheet.name)
                else:
                    mapa[val]=set([sheet.name])
            elif("categoria" in str(sheet.cell_value(r,1)).split() or "categoria:" in str(sheet.cell_value(r,1)).split() or "Categoria" in str(sheet.cell_value(r,1)).split()):
                flag=True
        if(not flag):
            print(loc)
print(mapa)
