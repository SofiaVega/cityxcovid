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

for i in range(1,21):
    loc=("/Users/hogar/Downloads/inventario_comercios/comercios"+str(i)+".xlsx")
    book = xlrd.open_workbook(loc)
    for sheet in book.sheets():
        for r in range(sheet.nrows):
            for c in range(sheet.ncols):
                #revisar acentos, mayusculas, dos puntos
                if(sheet.cell_value(r,c)=="categoria"):
                    for val in sheet.col_values(c):
                        if val in mapa:
                            mapa[val].add(sheet.name)
                        else:
                            mapa[val]=set([sheet.name])
                    break
print(mapa)
