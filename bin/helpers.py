import sys

def define_docopt_vars(from_these_args, module_name):
    module = sys.modules[module_name]
    for key in from_these_args:
        scrubbed_key = key.replace("--", "")
        module.__dict__[scrubbed_key] = from_these_args[key]
