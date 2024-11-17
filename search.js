import UIKit
class ViewController: UIViewController {
    var searchTextField: UITextField!
    override func viewDidLoad() {
        super.viewDidLoad()
        setupSearchTextField()
    }

    func setupSearchTextField() {
        searchTextField = UITextField()
        searchTextField.frame = CGRect(x: 20, y: 100, width: self.view.frame.width - 40, height: 40)
        searchTextField.placeholder = "Enter search term"
        searchTextField.borderStyle = .roundedRect
        searchTextField.delegate = self

        self.view.addSubview(searchTextField)
    }

    func showModalDialog(with text: String) {
        let alertController = UIAlertController(title: "Search Term", message: text, preferredStyle: .alert)
        alertController.addAction(UIAlertAction(title: "OK", style: .default, handler: nil))
        self.present(alertController, animated: true, completion: nil)
    }
}

extension ViewController: UITextFieldDelegate {
    func textFieldShouldReturn(_ textField: UITextField) -> Bool {
        if let searchTerm = textField.text, !searchTerm.isEmpty {
            showModalDialog(with: searchTerm)
        }
        textField.resignFirstResponder()
        return true
    }
}
