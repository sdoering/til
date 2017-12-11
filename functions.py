def dict_factory(colnames, rows):
    """
    Returns each row as a dict.
    [...]
    """
    return [dict(zip(colnames, row)) for row in rows]
    
    
def named_tuple_factory(colnames, rows):
    """
    Returns each row as a namedtuple
    https://docs.python.org/2/library/collections.html#collections.namedtuple
    This is the default row factory.
    [...]
    """
    clean_column_names = map(_clean_column_name, colnames)
    try:
        Row = namedtuple('Row', clean_column_names)
    except Exception:
        # Create list because py3 map object will be consumed by first attempt
        clean_column_names = list(map(_clean_column_name, colnames))
        # [...]
        Row = namedtuple('Row', _sanitize_identifiers(clean_column_names))

    return [Row(*row) for row in rows]
    
