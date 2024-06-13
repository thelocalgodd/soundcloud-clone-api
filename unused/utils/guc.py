link = "https://github.com/thelocalgodd/soundcloud-clone-api/blob/main/tracks/SinceIHaveALover6LACK.jpg"

# note: this will break if a repo/organization or subfolder is named "blob" -- would be ideal to use a fancy regex
# to be more precise here

print(link.replace("github.com", "raw.githubusercontent.com").replace("/blob/", "/"))