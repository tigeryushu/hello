import requests
import json
import pymysql

def download():
    d=requests.get('https://interface.sina.cn/news/wap/fymap2020_data.d.json')
    js=json.loads(d.text)
    conn=pymysql.connect('localhost',user='root')
    conn.select_db('yiqing')
    cur=conn.cursor()
    cur.execute('delete from cdata')
    cur.execute('delete from pdata')
    sql='insert pdata (name, ename, value, death, cure) values (%s, %s, %s, %s, %s)'
    sqlCity='insert cdata (pname, name, value, death, cure) values (%s, %s, %s, %s, %s)'
    for j in js['data']['list']:
        cur.execute(sql, (j['name'], j['ename'], j['value'], j['deathNum'], j['cureNum']))
        print(j["name"])
        for c in j["city"]:
            cur.execute(sqlCity, (j['ename'], c['name'], c['conNum'], c['deathNum'], c['cureNum']))
        
            

    cur.close()
    conn.commit()
    conn.close()

download()
