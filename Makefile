PANDOC = pandoc
IFORMAT = markdown

FLAGS = --standalone --mathjax=$(MATHJAX)


ifdef MATHJAX_LOCAL
  MATHJAX = ${MATHJAX_LOCAL}
else
  MATHJAX ?= "https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML"
endif

TEMPLATE_HTML = template/template.html

all: index.html computer_science.html

index.html: index_src.md $(TEMPLATE_HTML)
	$(PANDOC) \
	  --template $(TEMPLATE_HTML)\
          --citeproc\
	  -t html -o $@ $<

computer_science.html: computer_science_src.md $(TEMPLATE_HTML)
	$(PANDOC) \
	  --template $(TEMPLATE_HTML)\
          --citeproc\
	  -t html -o $@ $<


clean:
	-rm -f *.html
