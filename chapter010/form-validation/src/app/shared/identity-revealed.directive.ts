import { Directive } from "@angular/core";
import { AbstractControl, FormGroup, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn } from "@angular/forms";

export const identityRevealedValidator:ValidatorFn = (control:FormGroup):ValidationErrors | null => {
  const name = control.get('name');
  const alertEgo = control.get('age');

  return name && alertEgo && name.value === alertEgo.value ? {'identityRevealed':true} : null;
}

@Directive({
  selector:'[appIdentityRevealed]',
  providers:[{provide:NG_VALIDATORS,useExisting:IdentityRevealedValidatorDirective,multi:true}]
})
export class IdentityRevealedValidatorDirective implements Validator{
  validate(control: FormGroup): ValidationErrors {
    return identityRevealedValidator(control)
  }

}

