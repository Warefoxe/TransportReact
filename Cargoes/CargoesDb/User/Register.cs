using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace CargoesDb.User
{
    public class Register
    {
        [Required(ErrorMessage = "Поле не може бути пустим!")]
        public string DisplayName { get; set; }
        [Required(ErrorMessage = "Поле не може бути пустим!")]
        public string UserName { get; set; }
        [Required(ErrorMessage = "Поле не може бути пустим!")]
        [EmailAddress(ErrorMessage = "Не правильний формат електронної пошти!")]
        public string Email { get; set; }
        [Required(ErrorMessage = "Поле не може бути пустим!")]
        [RegularExpression(@"^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{6,24}$", ErrorMessage = "Пароль повинен мати мінімум 6 символів, нижній і верхній регістр, та цифри!")]
        public string Password { get; set; }

    }
}
