PANDOC = pandoc
IFORMAT = markdown

FLAGS = --standalone --mathjax=$(MATHJAX)


ifdef MATHJAX_LOCAL
  MATHJAX = ${MATHJAX_LOCAL}
else
  MATHJAX ?= "https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML"
endif

TEMPLATE_HTML = template/template.html

FILES =  $(wildcard *_src.md)
TARGET_HTML_FILES := $(patsubst %_src.md,%.html,$(FILES))

all:  $(TARGET_HTML_FILES) 

%.html: %_src.md $(TEMPLATE_HTML)
	$(PANDOC) \
	  --template $(TEMPLATE_HTML)\
          --table-of-contents=true\
          --citeproc\
	  -t html -o $@ $<

clean:
	-rm -f *.html
