




Report Summary

┌─────────────────────────────────────────────────────────────────────────────┬────────────┬─────────────────┬─────────┐
│                                   Target                                    │    Type    │ Vulnerabilities │ Secrets │
├─────────────────────────────────────────────────────────────────────────────┼────────────┼─────────────────┼─────────┤
│ docker-vulneravel (debian 12.10)                                            │   debian   │      1472       │    -    │
├─────────────────────────────────────────────────────────────────────────────┼────────────┼─────────────────┼─────────┤
│ usr/local/lib/python3.9/site-packages/Flask-1.1.1.dist-info/METADATA        │ python-pkg │        1        │    -    │
├─────────────────────────────────────────────────────────────────────────────┼────────────┼─────────────────┼─────────┤
│ usr/local/lib/python3.9/site-packages/MarkupSafe-3.0.2.dist-info/METADATA   │ python-pkg │        0        │    -    │
├─────────────────────────────────────────────────────────────────────────────┼────────────┼─────────────────┼─────────┤
│ usr/local/lib/python3.9/site-packages/certifi-2025.1.31.dist-info/METADATA  │ python-pkg │        0        │    -    │
├─────────────────────────────────────────────────────────────────────────────┼────────────┼─────────────────┼─────────┤
│ usr/local/lib/python3.9/site-packages/chardet-3.0.4.dist-info/METADATA      │ python-pkg │        0        │    -    │
├─────────────────────────────────────────────────────────────────────────────┼────────────┼─────────────────┼─────────┤
│ usr/local/lib/python3.9/site-packages/click-8.1.8.dist-info/METADATA        │ python-pkg │        0        │    -    │
├─────────────────────────────────────────────────────────────────────────────┼────────────┼─────────────────┼─────────┤
│ usr/local/lib/python3.9/site-packages/idna-2.8.dist-info/METADATA           │ python-pkg │        1        │    -    │
├─────────────────────────────────────────────────────────────────────────────┼────────────┼─────────────────┼─────────┤
│ usr/local/lib/python3.9/site-packages/itsdangerous-2.2.0.dist-info/METADATA │ python-pkg │        0        │    -    │
├─────────────────────────────────────────────────────────────────────────────┼────────────┼─────────────────┼─────────┤
│ usr/local/lib/python3.9/site-packages/jinja2-3.1.6.dist-info/METADATA       │ python-pkg │        0        │    -    │
├─────────────────────────────────────────────────────────────────────────────┼────────────┼─────────────────┼─────────┤
│ usr/local/lib/python3.9/site-packages/pip-23.0.1.dist-info/METADATA         │ python-pkg │        1        │    -    │
├─────────────────────────────────────────────────────────────────────────────┼────────────┼─────────────────┼─────────┤
│ usr/local/lib/python3.9/site-packages/requests-2.22.0.dist-info/METADATA    │ python-pkg │        2        │    -    │
├─────────────────────────────────────────────────────────────────────────────┼────────────┼─────────────────┼─────────┤
│ usr/local/lib/python3.9/site-packages/setuptools-58.1.0.dist-info/METADATA  │ python-pkg │        2        │    -    │
├─────────────────────────────────────────────────────────────────────────────┼────────────┼─────────────────┼─────────┤
│ usr/local/lib/python3.9/site-packages/urllib3-1.25.11.dist-info/METADATA    │ python-pkg │        4        │    -    │
├─────────────────────────────────────────────────────────────────────────────┼────────────┼─────────────────┼─────────┤
│ usr/local/lib/python3.9/site-packages/werkzeug-3.1.3.dist-info/METADATA     │ python-pkg │        0        │    -    │
├─────────────────────────────────────────────────────────────────────────────┼────────────┼─────────────────┼─────────┤
│ usr/local/lib/python3.9/site-packages/wheel-0.45.1.dist-info/METADATA       │ python-pkg │        0        │    -    │
└─────────────────────────────────────────────────────────────────────────────┴────────────┴─────────────────┴─────────┘
Legend:
- '-': Not scanned
- '0': Clean (no security findings detected)

docker-vulneravel (debian 12.10)
================================
Total: 1472 (UNKNOWN: 4, LOW: 709, MEDIUM: 638, HIGH: 116, CRITICAL: 5)

## Pacotes Python vulneráveis:

Flask 1.1.1: 1 vulnerabilidade
idna 2.8: 1 vulnerabilidade
pip 23.0.1: 1 vulnerabilidade
requests 2.22.0: 2 vulnerabilidades
setuptools 58.1.0: 2 vulnerabilidades
urllib3 1.25.11: 4 vulnerabilidades


Report Summary

┌──────────────────────────────────────────────────────────────────────────────────┬────────────┬─────────────────┬─────────┐
│                                      Target                                      │    Type    │ Vulnerabilities │ Secrets │
├──────────────────────────────────────────────────────────────────────────────────┼────────────┼─────────────────┼─────────┤
│ docker-nao-vulneravel (debian 12.10)                                             │   debian   │       290       │    -    │
├──────────────────────────────────────────────────────────────────────────────────┼────────────┼─────────────────┼─────────┤
│ home/appuser/.local/lib/python3.9/site-packages/Flask-1.1.1.dist-info/METADATA   │ python-pkg │        1        │    -    │
├──────────────────────────────────────────────────────────────────────────────────┼────────────┼─────────────────┼─────────┤
│ home/appuser/.local/lib/python3.9/site-packages/MarkupSafe-3.0.2.dist-info/META- │ python-pkg │        0        │    -    │
│ DATA                                                                             │            │                 │         │
├──────────────────────────────────────────────────────────────────────────────────┼────────────┼─────────────────┼─────────┤
│ home/appuser/.local/lib/python3.9/site-packages/certifi-2025.1.31.dist-info/MET- │ python-pkg │        0        │    -    │
│ ADATA                                                                            │            │                 │         │
├──────────────────────────────────────────────────────────────────────────────────┼────────────┼─────────────────┼─────────┤
│ home/appuser/.local/lib/python3.9/site-packages/chardet-3.0.4.dist-info/METADATA │ python-pkg │        0        │    -    │
├──────────────────────────────────────────────────────────────────────────────────┼────────────┼─────────────────┼─────────┤
│ home/appuser/.local/lib/python3.9/site-packages/click-8.1.8.dist-info/METADATA   │ python-pkg │        0        │    -    │
├──────────────────────────────────────────────────────────────────────────────────┼────────────┼─────────────────┼─────────┤
│ home/appuser/.local/lib/python3.9/site-packages/idna-2.8.dist-info/METADATA      │ python-pkg │        1        │    -    │
├──────────────────────────────────────────────────────────────────────────────────┼────────────┼─────────────────┼─────────┤
│ home/appuser/.local/lib/python3.9/site-packages/itsdangerous-2.2.0.dist-info/ME- │ python-pkg │        0        │    -    │
│ TADATA                                                                           │            │                 │         │
├──────────────────────────────────────────────────────────────────────────────────┼────────────┼─────────────────┼─────────┤
│ home/appuser/.local/lib/python3.9/site-packages/jinja2-3.1.6.dist-info/METADATA  │ python-pkg │        0        │    -    │
├──────────────────────────────────────────────────────────────────────────────────┼────────────┼─────────────────┼─────────┤
│ home/appuser/.local/lib/python3.9/site-packages/requests-2.22.0.dist-info/METAD- │ python-pkg │        2        │    -    │
│ ATA                                                                              │            │                 │         │
├──────────────────────────────────────────────────────────────────────────────────┼────────────┼─────────────────┼─────────┤
│ home/appuser/.local/lib/python3.9/site-packages/urllib3-1.25.11.dist-info/METAD- │ python-pkg │        4        │    -    │
│ ATA                                                                              │            │                 │         │
├──────────────────────────────────────────────────────────────────────────────────┼────────────┼─────────────────┼─────────┤
│ home/appuser/.local/lib/python3.9/site-packages/werkzeug-3.1.3.dist-info/METADA- │ python-pkg │        0        │    -    │
│ TA                                                                               │            │                 │         │
├──────────────────────────────────────────────────────────────────────────────────┼────────────┼─────────────────┼─────────┤
│ usr/local/lib/python3.9/site-packages/pip-23.0.1.dist-info/METADATA              │ python-pkg │        1        │    -    │
├──────────────────────────────────────────────────────────────────────────────────┼────────────┼─────────────────┼─────────┤
│ usr/local/lib/python3.9/site-packages/setuptools-58.1.0.dist-info/METADATA       │ python-pkg │        2        │    -    │
├──────────────────────────────────────────────────────────────────────────────────┼────────────┼─────────────────┼─────────┤
│ usr/local/lib/python3.9/site-packages/wheel-0.45.1.dist-info/METADATA            │ python-pkg │        0        │    -    │
└──────────────────────────────────────────────────────────────────────────────────┴────────────┴─────────────────┴─────────┘
Legend:
- '-': Not scanned
- '0': Clean (no security findings detected)


docker-nao-vulneravel (debian 12.10)
====================================
Total: 290 (UNKNOWN: 0, LOW: 258, MEDIUM: 30, HIGH: 1, CRITICAL: 1)

## Redução considerável na vulnerabilidade
Seguem algumas vulnerabilidades que podem ser reduzidas talvez utilizando uma imagem alpine ao invés de slim.
