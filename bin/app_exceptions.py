class AlreadySearchingException(Exception):
    """ Raised in the case of there being an active search when
        trying to start a new search
    """
