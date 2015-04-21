import os
import logging

logging.basicConfig()
log = logging.getLogger()
log.setLevel(os.environ.get("LOG_LEVEL", "INFO"))

search_table_name = os.environ.get("SEARCH_DDB_TABLE_NAME", "collector_searches_3")
user_table_name = os.environ.get("USER_DDB_TABLE_NAME", "collector_users")

