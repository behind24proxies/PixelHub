import os
import json
import random
import string

def randomString(stringLength=6):
    lettersAndDigits = string.ascii_letters + string.digits
    return ''.join(random.choice(lettersAndDigits) for i in range(stringLength))
jned = json.loads(input('enter the json string : '))
remote_git = 'git remote add somename ' + input('\nenter the repo link (no worries I will add .git) :') 
if not remote_git.endswith('.git'):
    remote_git = remote_git + '.git'
   
last_one = 'git push -f somename master'
commit_msg = input('\nidk , type some stuff here : ')


fries = {
    'one':1,
    'two':2,
    'three':3,
    'four':4
}
directory = randomString() + '-ignore'
os.mkdir(directory)
os.chdir(directory)
print('done')
print(os.system("git init"))
print('inited')
for k in jned.keys():
    if jned[k] != 'zero':
        current_date = k
        builded_date = f'{k} 12:00:00'
        print(builded_date)
        for x in range(0,fries[jned[k]]):
            with open('IceCream.txt','a') as file:
                file.write('a')        
                print(os.system("git add ."))
                print('added')
                command = f"git commit -m \"{commit_msg}\" --date=\"{builded_date}\" --no-edit "
                print(os.system(command))
                print(command)
try:                
    print(os.system(remote_git))
    print(os.system(last_one))
except Exception as e:
    print(e)
    print('we could not push to the remote repo , you can do it manually')
    print(f'you can find the file here ---->{directory}<----')


