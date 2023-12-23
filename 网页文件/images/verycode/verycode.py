import gvcode
s,v = gvcode.generate()
s.save('./verycode/%s.jpg' % v)