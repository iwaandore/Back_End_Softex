import pandas as pd

df = pd.read_csv("notas_alunos.csv")
df = df.set_index("aluno")
media = (df["nota_1"] + df["nota_2"])/2
df["media"] = media

df.loc[df["media"] >= 7, "situacao"] = "Aprovado!"
df.loc[df["faltas"] < 5, "situacao"] = "Aprovado!"
df.loc[df["media"] < 7, "situacao"] = "Reprovado!"
df.loc[df["faltas"] > 5, "situacao"] = "Reprovado!"
df.to_csv("alunos_situacao.csv")

maior_faltas = df["faltas"].max()
print("A maior quantidade de faltas é:", maior_faltas)
maior_media = df["media"].max()
print("A maior media é:", maior_media)
media_geral = df["media"].median()
print("A média geral é:", media_geral)
