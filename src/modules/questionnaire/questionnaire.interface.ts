export interface Questionnaire {
    idquestionnaire?: number;
    scores_max:number;
    theme_idtheme?:number;
    name:string;
    description:string;
}
export interface QuestionnaireUser{
    idquestionnaire:number;
    course:number;
    user:number;
} 