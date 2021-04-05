import { localize } from 'vee-validate';
import { extend } from 'vee-validate';
import es from 'vee-validate/dist/locale/es.json';
import { required, required_if, email, numeric ,min_value, integer, double ,max_value } from 'vee-validate/dist/rules';


localize('es',es);
// No message specified.
extend('email', email);
// Override the default message.
extend('required', required);
extend('required_if', required_if);
extend('numeric', numeric);
extend('min_value', min_value);
extend('integer',integer)
extend('double',double);
extend('max_value',max_value);