import os
import logging

search_table_name = os.environ.get("SEARCH_DDB_TABLE_NAME", "collector_searches_3")
logging.basicConfig()
log = logging.getLogger()
log.setLevel(os.environ.get("LOG_LEVEL", "INFO"))

